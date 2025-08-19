import { redirect } from '@sveltejs/kit';
import { toastStore } from '/toast';
import { getAccessTokenFromCookies } from './utils/cookies';
import type { AuthInfo } from './types';

// Testing flag for authentication - set to true to use auth testing branch
const USE_AUTH_TESTING = false;

export const API_BASE_URL = USE_AUTH_TESTING
  ? 'https://smile-design-manhattan-api-git-new-auth-evancoppas-projects.vercel.app'
  : 'https://smile-design-manhattan-api.vercel.app';



export async function authenticatedFetch(
  url: string, 
  options: RequestInit = {}, 
  authInfo?: AuthInfo
): Promise<Response> {
  
  let token: string | undefined;
  
  if (authInfo?.token) {
    token = authInfo.token;
  } else {
    // Get token from cookies instead of Svelte store
    token = getAccessTokenFromCookies() || undefined;
  }
  
  if (!token) {
    throw new Error('No authentication token available');
  }

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    ...options.headers,
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      credentials: 'include' // Include cookies for session management
    });
    
    if (!response.ok) {
      // Check for authentication/token errors
      if (response.status === 401 || response.status === 403) {
        toastStore.error('Your session has expired. Please log out and log back in to continue.', {
          duration: 8000
        });
        
      }
    }
    
    return response;
    
  } catch (fetchError) {
    throw fetchError;
  }
}

// Public API functions (no authentication required)
export async function fetchPublicPractices(): Promise<Response> {
  return await fetch(`${API_BASE_URL}/practices/public`);
}

export async function fetchPublicTreatmentPlan(
  lastName: string,
  practiceCode: string,
  uuid?: string
): Promise<Response> {
  const params = new URLSearchParams({
    lastName: encodeURIComponent(lastName),
    practiceCode: encodeURIComponent(practiceCode)
  });
  
  if (uuid) {
    params.append('uuid', uuid);
  }
  
  return await fetch(`${API_BASE_URL}/plans/public?${params.toString()}`);
}

export async function getPublicTreatmentPlan(uuid: string): Promise<Response> {
  console.log(`Fetching public treatment plan for UUID: ${uuid}`);
  return await fetch(`${API_BASE_URL}/public/treatment-plan/${uuid}`);
}