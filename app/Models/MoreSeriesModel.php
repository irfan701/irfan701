<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MoreSeriesModel extends Model
{
    use HasFactory;
    protected $table='more_series';
    protected $guarded=[];
    public $timestamps=false;
}
