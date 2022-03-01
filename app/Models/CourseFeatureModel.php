<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseFeatureModel extends Model
{
    use HasFactory;
    protected $table='course_features';
    protected $guarded=[];
    public $timestamps=false;
}
