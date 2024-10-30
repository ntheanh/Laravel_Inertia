<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(){
        $users = User::orderBy("id","desc")->paginate(3);

        return Inertia::render("Users/Show", compact("users"));
    }
}