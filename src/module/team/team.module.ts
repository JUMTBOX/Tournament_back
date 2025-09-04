import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from '../../entity/team/team.entity';
import { TeamService } from '../../service/team/team.service';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  providers: [TeamService],
  exports: [TeamService],
})
export class TeamModule {}
