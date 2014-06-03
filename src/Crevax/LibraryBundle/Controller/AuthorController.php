<?php

namespace Crevax\LibraryBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class AuthorController extends Controller
{
    public function indexAction()
    {
        return $this->render('CrevaxLibraryBundle:Author:index.html.twig');
    }
}
