<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Exception;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class GoogleController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }
    
    public function handleGoogleCallback()
    {
        try {
            $user = Socialite::driver('google')->user();
        } catch (\Exception $e) {
            if($e->getCode() == 400) {
                return to_route('register')->with([
                    'type' => 'error', 
                    'message' => 'permission is not allowed, google auth is canceled'
                ]);
            } 
            // return $e->getCode() . ':' . $e->getMessage();
        }

        try {    
            $user = Socialite::driver('google')->stateless()->user();
    
            $finduser = User::where('google_id', $user->id)->first();
    
            if($finduser){
                session()->regenerate();
                Auth::login($finduser);
    
                return to_route('dashboard')->with([
                    'type' => 'success',
                    'message' => 'You are logged in.'
                ]);
    
            }else{
                $newUser = User::create([
                    'name' => $user->name,
                    'email' => $user->email,
                    'google_id'=> $user->id,
                    'google_access_token' => $user->token,
                    'google_refresh_token' => $user->refreshToken,
                    'google_expires_in' => $user->expiresIn,
                    'password' => encrypt('123456')
                ]);
    
                Auth::login($newUser);
    
                return redirect('/dashboard')->with([
                    'type' => 'success',
                    'message' => 'You are logged in.'
                ]);
            }
    
        } catch (Exception $e) {
            // dd($e->getMessage());
            return to_route('register')->with([
                'type' => 'error',
                'message' => str($e->getMessage())->limit(100),
            ]);
        }
    }
}
