<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //  \App\Models\Counter::factory(1)->create();
        // \App\Models\Product::factory(5)->create();
        //  \App\Models\Customer::factory(10)->create();
        //  \App\Models\Invoice::factory(100)->create();
        \App\Models\InvoiceItem::factory(10)->create();
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}