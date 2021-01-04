import { User } from '../models/user.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
	private users: User[] = [
		{
			firstName: 'Jeremy',
			lastName: 'Trichaud',
			email: 'trichaud.jeremy@hotmail.com',
			drinkPreference: 'Sprite',
			hobbies: [
				'Jdr',
				'Warthunder'
			]
		}
	];
	userSubject = new Subject<User[]>();

	emitUsers() {
		this.userSubject.next(this.users.slice());
	}

	addUser(user: User) {
		this.users.push(user);
		this.emitUsers();
	}
}