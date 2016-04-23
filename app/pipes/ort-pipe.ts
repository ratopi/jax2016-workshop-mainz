import { PipeTransform} from 'angular2/core';
import { Pipe} from 'angular2/core';

// {{ f.abflugort | ort:'short' }}
@Pipe({
	name: 'ort'
})
export class OrtPipe implements PipeTransform {

	transform(value:any, args:any[]):any {

		const NAMES = {
			'Graz': {
				long: "Flughafen Graz-Thalerhof",
				short: "GRZ"
			},
			'Hamburg': {
				long: "Airport Hamburg",
				short: "HAM"
			},
			'Frankfurt': {
				long: "Airport Frankfurt Rhein-Main",
				short: "FRA"
			}
		};

		var fmt = args[0]; // short, long

		console.log(args);

		var o = NAMES[value];

		var result = o ? o[fmt] : value;

		result = result ? result : value;

		console.log(result);
		console.log(fmt);
		console.log(o);

		return result;
	}
}
