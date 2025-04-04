import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Gender } from '../enums/gender.enum';
// import { ActivityLevel } from '../enums/activity-level.enum';
// import { Goal } from '../enums/goal.enum';
// import { DietType } from '../enums/diet-type.enum';
import { FoodTracker } from 'src/modules/food-tracker/entities/food-tracker.entity';
import { WaterTracker } from 'src/modules/water-tracker/entities/water-tracker.entity';
import { ActivityLevel } from '../enums/activity-level.enum';
import { Goal } from '../enums/goal.enum';

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, (user) => user.userProfile, { onDelete: 'CASCADE' })
  user: User;

  @OneToMany(() => WaterTracker, (waterTracker) => waterTracker.userProfile)
  waterTrackers: WaterTracker[];

  @OneToMany(() => FoodTracker, (foodTracker) => foodTracker.userProfile)
  foodTrackers: FoodTracker[];

  @Column({ type: 'date', nullable: false })
  birthdate: Date;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false })
  weight: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false })
  height: number;

  @Column({ type: 'enum', enum: ActivityLevel, nullable: true })
  activityLevel: ActivityLevel;

  @Column({ type: 'enum', enum: Goal, nullable: true })
  weightGoal: Goal;

  @Column({ type: 'integer', default: 0 })
  age: number;

  @Column({ type: 'integer', default: 0 })
  caloriesGoal: number;

  @Column({ type: 'integer', default: 0 })
  hydrationGoal: number;

  // @Column({ type: 'enum', enum: DietType, default: DietType.NONE })
  // dietType: string;
}
