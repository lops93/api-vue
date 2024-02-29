<?php

use App\Http\Controllers\Api\V1\CourseController;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function () {
    Route::apiResource('courses', CourseController::class);
});
