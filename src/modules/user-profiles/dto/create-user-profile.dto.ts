import {
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  Max,
  Min,
} from 'class-validator';
import { Gender } from '../enums/gender.enum';
import { ActivityLevel } from '../enums/activity-level.enum';
import { Goal } from '../enums/goal.enum';

export class CreateUserProfileDto {
  @IsNotEmpty()
  @IsISO8601({ strict: true })
  birthdate: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(10.0)
  @Max(299.99)
  weight: number;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.5)
  @Max(2.99)
  height: number;

  @IsNotEmpty()
  @IsEnum(ActivityLevel)
  activityLevel: ActivityLevel;

  @IsNotEmpty()
  @IsEnum(Goal)
  weightGoal: Goal;
}
