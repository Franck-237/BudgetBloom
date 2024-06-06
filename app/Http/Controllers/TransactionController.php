<?php

namespace App\Http\Controllers;
use App\Models\Transaction;

use Inertia\Inertia;

use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        //$transaction = Transaction::create($request->all());
        //return redirect('/dashboard');
        //event(new Registered($transaction));

        $request->validate([
            'amount' => 'required|numeric',
            'description' => 'required|string',
            'categories' => 'required|string',
        ]);

        $user = auth()->user(); // Récupère l'utilisateur connecté
        $user->transactions()->create($request->only('amount', 'description', 'categories'));

        return Inertia::render('Admin');
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
}
