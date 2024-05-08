import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { FaUserLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import statical from '../../../images/static.png';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div>
            <Navbar />
            {status && <div className="text-center my-4 font-medium text-md text-green-600">{status}</div>}
            <div className='w-[90%] lg:w-auto container mx-auto lg:gap-5 p-10 mt-10 lg:flex items-center justify-between bg-white shadow-2xl border rounded-2xl lg:max-w-[1000px] mb-20'>
                <Head title="Log in" />
                <form onSubmit={submit} className='lg:w-1/2'>
                    <div>
                        <InputLabel htmlFor="email" value="Email" /> 
                        <MdAlternateEmail className='absolute w-[30px] h-[30px] pt-4 pl-3'/>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full pl-10"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="User@gmail.com"
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />
                        <FaUserLock className='absolute w-[35px] h-[35px] pt-4 pl-3'/>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full pl-10"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ms-2 text-sm text-gray-600">Remember me</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm md:text-md text-[#5038ED] hover:text-[#252046] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                </form>
                <div className='right-0 hidden lg:block'>
                    <img src={statical} alt="" />
                </div>
            </div> 
            <Footer />
        </div>
    );
}
