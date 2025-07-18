import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.Module';
import { UsuarioController } from './controllers/usuario.controller';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './services/usuario.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), forwardRef(() => AuthModule)],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [UsuarioService],
})
export class UsuarioModule {}
