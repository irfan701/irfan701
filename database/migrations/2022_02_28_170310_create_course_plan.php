<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course_plan', function (Blueprint $table) {
            $table->id();
            $table->string('title',1000);
            $table->string('short_des',1000);
            $table->string('key_points',1000);
            $table->string('video',1000);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course_plan');
    }
};
