<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class EditProfileController extends Controller
{
    public function changeName(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }

        if(! Auth::check()) {
            return response(null,401);
        }


        User::where('id', Auth::id())
            ->update(['name' => $request->name]);

        return response()->json([
            'message' => 'Name successfully changed',
            'name' => $request->name
        ], 200);
    }
}
