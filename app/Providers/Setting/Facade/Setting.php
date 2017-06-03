<?php
namespace App\Providers\Setting\Facade;

use Illuminate\Support\Facades\Facade;

/**
 * Class Setting
 * @package App\Providers\Setting\Facade
 */
class Setting extends Facade
{
    /**
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'setting';
    }
}