<?php

namespace Crevax\UserBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class UserController extends Controller
{
    public function indexAction()
    {
        return $this->render('CrevaxUserBundle:User:index.html.twig');
    }
}
