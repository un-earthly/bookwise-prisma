type AsyncFunction = (...args: any[]) => Promise<any>;

const catchAsync = (fn: AsyncFunction) => {
    return (req: any, res: any, next: any) => {
        fn(req, res, next).catch(next);
    };
};

export default catchAsync;