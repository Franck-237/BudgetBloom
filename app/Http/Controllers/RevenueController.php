<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use App\Models\Revenue;
use Illuminate\Http\Request;

class RevenueController extends Controller
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
        //Revenue::create($request->all());
        //return redirect('/dashboard');

        $request->validate([
            'salary' => 'required|numeric',
            'placement' => 'numeric',
            'others' => 'numeric',
        ]);

        $user = auth()->user(); // Récupère l'utilisateur connecté

        // Recherche le revenu de l'utilisateur
        $revenue = $user->revenues()->first();

        if ($revenue) {
            // Met à jour le revenu existant
            $revenue->update($request->only('salary', 'placement', 'others'));
        } else {
            // Crée un nouveau revenu pour l'utilisateur
            $user->revenues()->create($request->only('salary', 'placement', 'others'));
        }

        return Inertia::render('Admin');
    }

    /**
     * Display the specified resource.
     */
    public function show(Revenue $revenue)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Revenue $revenue)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Revenue $revenue)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Revenue $revenue)
    {
        //
    }
}
