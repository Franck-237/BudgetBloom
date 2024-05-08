
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

import Navbar from '@/Components/Navbar';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <div>
        <Navbar />
        <div
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
        >
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className='w-[80%] lg:w-auto bg-white shadow-2xl border rounded-2xl container mx-auto p-10 lg:max-w-[600px]'
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm 
                            className='w-[80%] lg:w-auto bg-white shadow-2xl border rounded-2xl container mx-auto p-10 lg:max-w-[600px]'
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm 
                            className='w-[80%] lg:w-auto bg-white shadow-2xl border rounded-2xl container mx-auto p-10 lg:max-w-[600px]'
                        />
                    </div>
                    <div className='w-[80%] lg:w-auto shadow-2xl border rounded-2xl container mx-auto p-10 lg:max-w-[600px]'>
                        <SecondaryButton>
                            <a href={route("dashboard")}>Back</a>
                        </SecondaryButton>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
