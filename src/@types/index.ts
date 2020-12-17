export enum ReviewType {
  daily = 'daily',
  weekly = 'weekly',
  monthly = 'monthly',
  yearly = 'yearly',
  // custom = 'custom',
}

export enum DayOfTheWeek {
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  saturday = 'saturday',
  sunday = 'sunday',
}

interface BaseReview {
  id: string;
  title: string;
  description: string;
  time: Date;
  type: ReviewType | string;
  day?: DayOfTheWeek | number;
  date?: Date;
  lastLog?: string;
  createdAt?: Date;
  updatedAt?: Date;
  archivedAt?: string | Date;
}

export interface Review extends BaseReview {
  logs: string[];
  questions: ReviewQuestion[];
  type: ReviewType;
}

export interface ExternalReview extends BaseReview {
  logs: string[];
  type: 'ExternalReview';
  link: string;
}

export interface ReviewLog {
  id: string;
  date: string;
  duration: number;
  questions: ReviewQuestion[];
  startDate: string;
  reviewId: string;
}

export enum ReviewQuestionType {
  Choice = 'Choice',
  Select = 'Select',
  Number = 'Number',
  String = 'String',
  Time = 'Time',
  Date = 'Date',
  List = 'List',
}

export interface ReviewQuestionOption {
  id: string;
  label: string;
  value?: boolean;
}

export interface ReviewQuestion {
  id: string;
  q: string;
  type: ReviewQuestionType;
  required?: boolean;
  answer?: ReviewQuestionAnswer;
  options?: ReviewQuestionOption[];
}

export interface ReviewQuestionAnswer {
  content: string;
  image: string[];
  files: string[];
  voiceNotes: string[];
  date?: string;
  options?: ReviewQuestionOption[];
}

export interface WeeklyReview extends Review {
  day: DayOfTheWeek;
  type: ReviewType.weekly;
}

export interface MonthlyReview extends Review {
  day: number;
  type: ReviewType.monthly;
}

export interface YearlyReview extends Review {
  date: Date;
  type: ReviewType.yearly;
}

export interface User {
  name: string;
  image: string;
}
