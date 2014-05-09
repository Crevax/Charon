<?php

namespace Crevax\DossierBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DossierController extends Controller
{
    public function indexAction($name)
    {
        return $this->render('CrevaxDossierBundle:Dossier:index.html.twig');
    }

    public function pinterestAction()
    {
        return $this->render('CrevaxDossierBundle:Dossier:pinterest.html.twig');
    }
}
