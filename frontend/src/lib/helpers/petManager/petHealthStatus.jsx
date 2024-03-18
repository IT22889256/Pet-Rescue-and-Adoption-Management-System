export function getPetHealth(status) {
	switch (status) {
		case 'Good':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-[#f8fafc] bg-[#15803d]">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'Need Treament':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-[#f8fafc] bg-[#be123c]">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'Treating':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-[#f8fafc] bg-[#ca8a04]">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		default:
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
	}
}
