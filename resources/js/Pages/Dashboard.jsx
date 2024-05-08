
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

import Dash from '@/Components/Dash';

export default function Dashboard({ auth }) {
    return (
        <div
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <Dash />
        </div>
    );
}
