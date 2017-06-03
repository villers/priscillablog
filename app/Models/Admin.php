<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Contracts\Auth\Authenticatable as IAuthenticatable;
use Illuminate\Contracts\Auth\CanResetPassword as ICanResetPassword;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Admin
 * @package App
 */
class Admin extends Model implements IAuthenticatable, ICanResetPassword
{
    use Authenticatable, CanResetPassword;

    /**
     * @var string
     */
    protected $table = 'admin';

    /**
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    /**
     * @var array
     */
    protected $fillable = ['name', 'email', 'password'];

    /**
     * @param $val
     */
    public function setPasswordAttribute($val)
    {
        $this->attributes['password'] = bcrypt($val);
    }
}