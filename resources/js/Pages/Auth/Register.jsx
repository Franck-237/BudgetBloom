import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { FaUser } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import statical from '../../../images/static.png';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <div>
            <Navbar />
            <div className='w-[90%] lg:w-auto container mx-auto lg:gap-8 p-10 mt-10 lg:flex items-center justify-between bg-white shadow-2xl border rounded-2xl lg:max-w-[1000px] mb-20'>
            <Head title="Register" />
                    <form onSubmit={submit} className='lg:w-1/2'>
                        <div>
                            <InputLabel htmlFor="name" value="Name" />
                            <FaUser className='absolute w-[30px] h-[30px] pt-4 pl-3'/>

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full pl-10"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                placeholder='Franck'
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email" />
                            <MdAlternateEmail className='absolute w-[30px] h-[30px] pt-4 pl-3'/>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full pl-10"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                                placeholder='User@gmail.com'
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
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                            <FaCheck className='absolute w-[35px] h-[35px] pt-2 pl-3'/>
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full pl-10"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />

                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Link
                                href={route('login')}
                                className="underline text-sm md:text-md text-[#5038ED] hover:text-[#252046] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Already registered?
                            </Link>

                            <PrimaryButton className="ms-4" disabled={processing}>
                                Register
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
