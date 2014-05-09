<?php

namespace Crevax\UserBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class CrevaxUserBundle extends Bundle
{
    public function getParent()
    {
        return 'FOSUserBundle';
    }
}
