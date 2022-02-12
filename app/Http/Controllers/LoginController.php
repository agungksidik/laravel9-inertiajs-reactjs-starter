<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function create() {
        return inertia('Auth/Login');
    }

    public function store() {
        return inertia('Auth/Login');
    }
}
