<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Link
 * @package App\Models
 */
class Link extends Model
{
    /**
     * @var string
     */
    protected $table = 'links';

    /**
     * @var array
     */
    protected $fillable = ['name', 'link'];
}
