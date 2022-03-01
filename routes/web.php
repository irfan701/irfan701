<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\HomeController;

Route::controller(HomeController::class)->group(function () {
        Route::get('/getCourseFeatures', 'getCourseFeatures');
        Route::get('/getCoursePlan', 'getCoursePlan');
        Route::get('/getPaymentGuide', 'getPaymentGuide');
        Route::get('/getMoreSeries', 'getMoreSeries');

});



Route::get('/', function () {
    return view('index');
});

Route::get('{ReactRoutePath}', function () {
    return view('index');
})->where('ReactRoutePath','.*');
