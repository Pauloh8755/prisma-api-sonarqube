import pino from 'pino'

const pinoLogger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      ignore: false,
      levelFirst: true,
      timestampKey: 'time',
      translateTime: 'yyyy-mm-dd HH:MM:ss.l'
    }
  }
})

const logger = {
  error: (log) => pinoLogger.error({ msg: log.stack, info: log }),
  info: (log) => pinoLogger.info(log),
  debug: (log) => pinoLogger.debug(log)
}

export default logger
