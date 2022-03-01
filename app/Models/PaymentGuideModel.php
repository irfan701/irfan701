<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaymentGuideModel extends Model
{
    use HasFactory;
    protected $table='payment_guide';
    protected $guarded=[];
    public $timestamps=false;
}
