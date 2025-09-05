import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn() team_id: number;
  @Column() tournament_id: number;
  @Column() division_id: number;
  @Column() group_id: number;
  @Column({ length: 30 }) team_name: string;
  @Column({ length: 120 }) team_description: string;
  @Column({ length: 120 }) logo_url: string;

  @Generated()
  created_at: Date;
}
