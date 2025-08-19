// Common types for the application

export interface User {
	id: string;
	email: string;
	name: string;
	role: 'admin' | 'user';
	createdAt: Date;
	updatedAt: Date;
}

export interface AuthInfo {
  token?: string;
  user?: any;
}

export interface Todo {
	id: string;
	title: string;
	description?: string;
	completed: boolean;
	userId: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface AuthState {
	user: User | null;
	isAuthenticated: boolean;
	isLoading: boolean;
}

export interface ApiResponse<T> {
	data: T;
	message?: string;
	success: boolean;
}

export interface ApiErrorData {
	message: string;
	status: number;
	code?: string;
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface RegisterData {
	email: string;
	password: string;
	name: string;
}

export interface PaginationParams {
	page: number;
	limit: number;
	sort?: string;
	order?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
	data: T[];
	pagination: {
		page: number;
		limit: number;
		total: number;
		totalPages: number;
	};
}
