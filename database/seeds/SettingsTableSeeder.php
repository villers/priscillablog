<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->insert([
            'key'           => 'title',
            'name'          => 'Titre du blog',
            'description'   => 'Le titre du blog',
            'value'         => 'Priscilla Blog',
            'field'         => '{"name":"value","label":"Value","type":"text"}',
            'active'        => 1,
        ]);

        DB::table('settings')->insert([
            'key'           => 'desc',
            'name'          => 'Description',
            'description'   => 'Description du site visible dans google.',
            'value'         => 'Une description du site.',
            'field'         => '{"name":"value","label":"Value","type":"text"}',
            'active'        => 1,

        ]);

        DB::table('settings')->insert([
            'key'           => 'keywords',
            'name'          => 'Mots clés',
            'description'   => 'Mots clés du site visible dans google.',
            'value'         => 'Blog, Octodon',
            'field'         => '{"name":"value","label":"Value","type":"text"}',
            'active'        => 1,

        ]);

        DB::table('settings')->insert([
            'key'           => 'author',
            'name'          => 'Auteur',
            'description'   => 'Auteur du site',
            'value'         => 'Priscilla Jolly',
            'field'         => '{"name":"value","label":"Value","type":"text"}',
            'active'        => 1,
        ]);

        DB::table('settings')->insert([
            'key'           => 'post_per_page',
            'name'          => 'Posts par page',
            'description'   => 'Nombre de posts par page',
            'value'         => '8',
            'field'         => '{"name":"value","label":"Value" ,"type":"number"}',
            'active'        => 1,
        ]);
    }
}
