/**
 * construct a function that takes a boolean as an argument and returns
 * an array of two booleans. The first boolean should be false and the
 * @param const, let true Or False
 * @returns boolean
 */
export default function taskBlock(trueOrFalse)
{
	const task = false;
	const task2 = true;

	if (trueOrFalse)
	{
		const task = true;
		const task2 = false;
	}

    return [task, task2];
}
