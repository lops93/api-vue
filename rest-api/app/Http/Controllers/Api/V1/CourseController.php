<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Resources\V1\CourseCollection;
use App\Http\Resources\V1\CourseResource;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        return new CourseCollection((Course::paginate(10)));
    }

    public function show(Course $course)
    {
        return new CourseResource($course);
    }

    public function store(StoreCourseRequest $request)
    {
        Course::create($request->validated());
        return response()->json("Course Created");
    }

    public function update(StoreCourseRequest $request, Course $course)
    {
        $course->update($request->validated());
        return response()->json("Course Updated");
    }

    public function destroy(Course $course)
    {
        $course->delete();
        return response()->json("Course Deleted");
    }
}
