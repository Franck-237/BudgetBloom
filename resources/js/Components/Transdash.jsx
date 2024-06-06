import React from 'react';

import { useForm } from '@inertiajs/react';
import PrimaryButton from './PrimaryButton';
import InputError from './InputError';

const Transdash = () => {

  const { data, setData, post, processing, errors, reset } = useForm({
    salary: '',
    placement: '',
    others: '',
    description: '',
    amount: '',
    categories: ''
  });


  const submit = (e) => {
    e.preventDefault();
    post(route('revenue.store'));
  };

  const send = (e) => {
    e.preventDefault();
    post(route('transaction.store'));
  };

  return (
    <div className='ml-20 md:ml-0 p-3 md:p-6 lg:p-10 flex flex-wrap justify-start gap-5 md:gap-10 lg:gap-20'>
      <div className=''>
        <p className='font-bold text-[16px] md:text-[18px] lg:text-[20px] pb-3'>
          Vos revenues
        </p>
        <form onSubmit={submit}>
          <div>
            <input type="text" name="salary" id="salary" placeholder='Salary...' value={data.salary}
              onChange={(e) => setData('salary', e.target.value)}
              className='border rounded-lg px-5 w-auto md:w-[300px] lg:w-[400px] mb-5'
            />
            <InputError message={errors.salary} className="mt-2" />
          </div>
          <div>
            <input type="text" name="placement" id="placement" placeholder='Placements...' value={data.placement}
                onChange={(e) => setData('placement', e.target.value)}
                className='border rounded-lg px-5 w-auto md:w-[300px] lg:w-[400px] mb-5'
              />
              <InputError message={errors.placement} className="mt-2" />
          </div>
          <div>
            <input type="text" name="others" id="others" placeholder='Others...' value={data.others}
                   onChange={(e) => setData('others', e.target.value)}
                  className='border rounded-lg px-5 w-auto md:w-[300px] lg:w-[400px] mb-5'
                />
                <InputError message={errors.others} className="mt-2" />
          </div>
          <div className="mt-4">
            <PrimaryButton disabled={processing}>Enregistrer</PrimaryButton>
          </div>
        </form>
      </div>
      <div className=''>
      <p className='font-bold text-[16px] md:text-[18px] lg:text-[20px] pb-3'>
          Vos Transactions
        </p>
        <form onSubmit={send}>
          <div>
            <input type="text" name="description" id="description" placeholder='Description...' value={data.description}
              onChange={(e) => setData('description', e.target.value)}
              className='border rounded-lg px-5 w-auto md:w-[300px] lg:w-[400px] mb-5'
            />
            <InputError message={errors.description} className="mt-2" />
          </div>
          <div>
            <input type="text" name="categories" id="categories" placeholder='Categorie...' value={data.categories}
              onChange={(e) => setData('categories', e.target.value)}
                className='border rounded-lg px-5 w-auto md:w-[300px] lg:w-[400px] mb-5'
              />
              <InputError message={errors.categories} className="mt-2" />
          </div>
          <div>
            <input type="text" name="amount" id="amount" placeholder='Amount...' value={data.amount}
              onChange={(e) => setData('amount', e.target.value)}
                  className='border rounded-lg px-5 w-auto md:w-[300px] lg:w-[400px] mb-5'
                />
                <InputError message={errors.amount} className="mt-2" />
          </div>
          <div className="mt-4">
            <PrimaryButton disabled={processing}>Enregistrer</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Transdash;
