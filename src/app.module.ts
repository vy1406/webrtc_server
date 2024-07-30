import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyController } from './dummy/dummy.controller';

@Module({
  imports: [],
  controllers: [AppController, DummyController],
  providers: [AppService],
})
export class AppModule {}
