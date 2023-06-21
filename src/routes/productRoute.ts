import express, {
    Request,
    Response,
    RequestHandler,
    NextFunction,
} from 'express';
import ProductService from '../services/productService';

const router = express.Router();

router.get('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const products = await ProductService.findAll();
        resp.status(200).json(products);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const existingProduct = await ProductService.findById(req.params.id);
        if (existingProduct) {
            resp.status(201).json(existingProduct);
        } else {
            resp.status(404).json({
                message: `product_not_found: ${req.params.id}`,
            });
        }
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const productId = req.params.id;
        const data = await ProductService.update(productId, {
            ...req.body,
        });

        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const productId = req.params.id;
        await ProductService.deleteByPrimaryKey(productId);

        res.status(200).json({
            message: `product_successfully_deleted: ${productId}`,
        });
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const payload = { ...req.body };
        const newProduct = await ProductService.save(payload);
        resp.status(201).json({ ...newProduct.dataValues });
    } catch (err) {
        next(err);
    }
});

export default router;
