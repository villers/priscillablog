<?php

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Setting::create(['key' => 'title', 'value' => 'Priscilla Blog']);
        Setting::create(['key' => 'desc', 'value' => 'La description du site de priscilla']);
        Setting::create(['key' => 'keywords', 'value' => 'Blog, Octodon']);
        Setting::create(['key' => 'author', 'value' => 'Villers']);
        Setting::create(['key' => 'email', 'value' => 'vilers.mickael@gmail.com']);
        Setting::create(['key' => 'logo', 'value' => '// Priscilla']);
        Setting::create(['key' => 'post_per_page', 'value' => '8']);
        Setting::create(['key' => 'dashboard_post_per_page', 'value' => '8']);
        Setting::create(['key' => 'dashboard_comment_per_page', 'value' => '10']);
    }
}
