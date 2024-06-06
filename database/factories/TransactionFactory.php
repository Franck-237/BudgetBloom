<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user_id = 3;
        return [
            //
            'user_id' => $user_id,
            'description' => fake()->name(),
            'categories' => fake()->name(),
            'amount' => fake()->randomFloat(3, 0, 10000000),
        ];
    }
}
