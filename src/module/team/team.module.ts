import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from '../../entity/team/team.entity';
import { TeamService } from '../../service/team/team.service';
import { TeamController } from 'src/controller/team/team.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Team])],
  controllers: [TeamController],
  providers: [TeamService],
})
export class TeamModule {}
