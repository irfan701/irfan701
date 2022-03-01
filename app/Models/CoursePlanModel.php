<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoursePlanModel extends Model
{
    use HasFactory;
    protected $table='course_plan';
    public $timestamps=false;
    protected $guarded=[];
}
