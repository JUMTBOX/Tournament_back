import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn() id: number;
  @Column({ length: 30 }) teamName: string;
  @Column({ length: 120 }) teamDescription: string;
  @Column({ length: 120 }) teamLogoUrl: string;
  @Column({ length: 10 }) tournamentId: string;
  @Generated()
  created_at: Date;
}
