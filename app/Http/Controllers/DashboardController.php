<?php

namespace App\Http\Controllers;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $user = auth()->user();
        $revenues = $user->revenues;
        $transactions = $user->transactions;
        $totalBalance = $this->calculateTotalBalance($user);

        return Inertia::render('Dashboard', compact('user', 'revenues', 'transactions', 'totalBalance'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function calculateTotalBalance(User $user)
    {
        $totalBalance = $user->revenues()->sum('salary') +
                    $user->revenues()->sum('placement') +
                    $user->revenues()->sum('others');

        $transactions = $user->transactions->sum('amount');
        $totalBalance -= $transactions;

        return $totalBalance;
    }
}
