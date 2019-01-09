import {Router} from 'express';
import {Request, Response, Router as CoreRouter} from 'express-serve-static-core';

const router: CoreRouter = Router();

router.get('/api/broadcast_messages', async (req: Request, res: Response) => {
  console.log('-Get /api/broadcast_messages');
  const data = (await import('./api/broadcast_messages.json')).default;
  // res.status(409).send((await import('./api/jasper/create_account_error_409.json')).default);
  /*setTimeout(()=>{
    res.json(data);
  }, 5000);*/
  res.json(data);
});

export default router;
