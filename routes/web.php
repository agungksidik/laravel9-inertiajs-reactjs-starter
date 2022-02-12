<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class);
Route::get('/dashboard', DashboardController::class);
Route::get('/login', [LoginControllertroller::class, 'create']);
Route::get('/login', [LoginController::class, 'store']);