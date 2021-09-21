import * as React from 'react';

const PokeCard = ({ name, moves, stats, types, sprites }) => {
	return (
		<div className='mx-2 py-4 group my-2 border-b-2 border-gray-400 rounded-lg hover:bg-red-400 hover:translate-y-px transition-colors '>
			<div className='w-full  flex flex-flex items-around flex-wrap justify-around'>
				<div className=' w-1/6'>
					<img
						className='w-full h-40 rounded-lg group-hover:scale-150 transition-all '
						src={sprites.front_default}
						alt='pokemon'
					/>
				</div>
				<div className='flex flex-col w-3/4 align-center text-gray-300'>
					<h5 className=' uppercase text-xl font-semibold'>
						{name}{' '}
						{types.map((t, idx) => (
							<span className='text-sm font-normal italic lowercase'>
								{t.type.name}
								{idx < types.length - 1 && ', '}
							</span>
						))}
					</h5>
					<div className='pt-3'>
						<span className='text-lg text-gray-300 font-semibold'>
							Moves :
						</span>{' '}
						{moves.slice(0, 3).map((m, idx) => (
							<span className='uppercase font-normal text-lg mx-1'>
								{m.move.name} {idx < 2 && ','}
							</span>
						))}
						<p className='text-lg text-gray-300 font-semibold'>
							Stats :{' '}
							{stats.slice(0, 3).map(s => (
								<span className='font-normal text-lg mx-1'>
									{s.stat.name} ({s.base_stat})
								</span>
							))}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export { PokeCard };
