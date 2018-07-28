import { User } from './user.model';
import { ChangeStatus } from './change-status.model';

export class Ticket {

    constructor(
        public id: String,
        public number: Number,
        public title: string,
        public status: string,
        public priority: string,
        public description: string,
        public image: string,
        public user: User,
        public userAssigned: User,
        public date: string,
        public changes: Array<ChangeStatus>
    ) { }

    public equals(obj: Ticket): boolean {
        return this.number === obj.number;
    }
}
