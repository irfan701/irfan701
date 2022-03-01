<?php

namespace App\Http\Controllers;

use App\Models\CourseFeatureModel;
use App\Models\CoursePlanModel;
use App\Models\MoreSeriesModel;
use App\Models\PaymentGuideModel;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    function getCourseFeatures(){
      $result=CourseFeatureModel::get();
      return $result;
    }

    function getCoursePlan(){
      $result=CoursePlanModel::get();
      return $result;
    }
    function getPaymentGuide(){
        $result=PaymentGuideModel::get();
        return $result;
    }
    function getMoreSeries(){
        $result=MoreSeriesModel::get();
        return $result;
    }


}
